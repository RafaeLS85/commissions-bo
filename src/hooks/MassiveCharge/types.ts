export type MassiveChargeState = {
  file: File | null;
  message: string;
  success: boolean;
  loading: boolean;
};

export type MassiveChargeActions = {
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDownloadTemplate: () => Promise<void>;
  onUploadFile: () => Promise<void>;
  onCleanMessage: () => void;
  onDeleteFile: () => void;
};
