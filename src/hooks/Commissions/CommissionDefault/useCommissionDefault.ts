import { useEffect, useState } from "react";
import { i18n } from "@/constants/commissions/legacy_i18n";
import { commissionDefaultService } from "@/services/Commissions/CommissionDefault/service";
import { useErrorsOnPercent } from "@/hooks/useErrorsOnPercent";
import { useToast } from "@chakra-ui/react";
import { showSuccess } from "@/lib/success";

export const useCommissionDefault = () => {
  const [commissionDefault, setCommissionDefault] = useState<string>();
  const [defaultValue, setDefaultValue] = useState<number | undefined>(0);
  const { rateError, setErrorsOnRate, validateOnSubmit } =
    useErrorsOnPercent(true);
  const [isDirty, setIsDirty] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reFetchData, setRefetch] = useState(false);
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']

  const updateCommission = async ({
    commissionDefault,
  }: {
    commissionDefault: string | undefined;
  }) => {
    if (rateError.hasError) return;

    const f_value = Number(commissionDefault);

    if (!commissionDefault || f_value <= 0) return;   

    setLoading(true);
    const commission: any = await commissionDefaultService.update(
      f_value
    );
    // renderErrors(commission);
    setLoading(false);

    if (commission._id) {
      setDefaultValue(commission.defaultCommission);
      showSuccess({
        title: i18n["commissionDefault.success.title"],
      });
      setCommissionDefault(commission.defaultCommission);
    }
  };

  useEffect(() => {
    setErrorsOnRate(commissionDefault);
  }, [commissionDefault]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await commissionDefaultService.get();
      setDefaultValue(response.defaultCommission);
      setCommissionDefault(response.defaultCommission);
      setLoading(false);
    }
    fetchData();
  }, [reFetchData]);

  return {
    state: {
      commissionDefault,
      defaultValue,
      rateError,
      isDirty,
      loading,
      reFetchData,
    },
    actions: {
      updateCommission,
      setErrorsOnRate,
      setCommissionDefault,
      validateOnSubmit,
      setRefetch,
    },
  };
};
