import { ChangeEvent, useCallback, useState } from 'react';
import { validationFileExtension,  } from './utils';
import { massiveChargeService } from '@/services/MassiveCharge/service';
import { useSessionStore } from '@/store/session';
import { showErrors } from '@/lib/errors';
import { showSuccess } from '@/lib/success';
import { MASSIVE_CHARGE_CONSTANTS } from '@/constants/massive-charge';
import { importError, successDescription, successTitle } from './constants';

const { uploadMassiveCharge } = massiveChargeService;

const useMassiveCharge = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>('');
  const session = useSessionStore((state) => state.session);
  const [loading, setLoading] = useState(false);

  const {file_input} = MASSIVE_CHARGE_CONSTANTS;

  const onChangeFile = useCallback((e: ChangeEvent<HTMLInputElement>) => {   

    if(!e || !e?.target || !e.target.files) return;

    const file = e.target.files[0];    

    if(!validationFileExtension(file)){     
      setMessage(importError);

      showErrors({
        title: importError,
      })
      setLoading(false)
      return;
    }
    setMessage('');
    setFile(file);

  }, []); 

  const onUploadFile = useCallback(async () => {
    
    setLoading(true)   

    if (!file) {
      setLoading(false)
      return setMessage(file_input.empty);
    }

    if (!validationFileExtension(file)) {
      setLoading(false)
      return setMessage(importError);
    }

    const { message, status } = await uploadMassiveCharge({
      file,
      email: session?.email,
    }); 

    setLoading(false)
    // setMessage(message); //backend message. Not useful

    if(status){
      showSuccess({
        title: successTitle,
        // description: successDescription
      })
      setMessage(successTitle)     
      // message: Subiste la plantilla con éxito
      // status: true
    }else{
      showErrors({
        title: message
      })
      // message: Falló la importación del archivo
      // status: false
    }

    setFile(null);

  }, [file]);

  const onCleanMessage = useCallback(() => {
    setMessage('');
  }, []);

  const onDeleteFile = useCallback(() => {
    setFile(null);
  }, []);

  return {
    state: { file, message, success: message === successTitle, loading },
    actions: {
      onChangeFile, onUploadFile, onCleanMessage, onDeleteFile,
    },
  };
};

export default useMassiveCharge;
