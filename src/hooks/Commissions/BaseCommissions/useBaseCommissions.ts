import { BASE_COMMISSIONS } from "@/constants/commissions";
import { showSnackbar } from "@/lib/notify";
import { commissionBaseService } from "@/services/Commissions/BaseCommissions/service";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const useBaseCommissions = () => {
  const [commissions, setCommissions] = useState({
    items: [],
    count: 0,
  });

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [seller, setSeller] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortfield] = useState({
    order: "desc",
    field: "lastUpdate",
  });
  const [error, setError] = useState({
    hasError: false,
    message: "",
  });   
  const [selectedValue, setSelectedValue] = useState<any>();
  const [rateInput, setRateInput] = useState(0); 
  const [refetch, setRefetch] = useState(false);   
  const [refetchSellers, setRefetchSellers] = useState(false);   
  const [sellers, setSellers] = useState([]);
  const toast = useToast()
  const statuses = ['success', 'error', 'warning', 'info']

  const getCommissions = async () => {
    const data = await commissionBaseService.get({
      page,
      pageSize,
      seller: searchTerm,
      sortField,
    });
    setCommissions(data);  
    
    // console.log(data)
    // 401 {statusCode: 401, message: 'Unauthorized'}    

    if (data.statusCode) {
      setLoading(false);
      setError({
        hasError: true,
        message: data.message,
      });
    }
    setLoading(false);
  };

  const createBaseCommission = async ({
    seller,
    rate,
  }: {
    seller: string;
    rate: number;
  }) => {
    const data = await commissionBaseService.create({ seller, rate }); 
     
    // renderErrors(data);  

    if(data._id){
      // showSuccess({
      //   title: BASE_COMMISSIONS.create,        
      // })   
      toast({
        title: `${status} toast`,
        status: 'success',
        isClosable: true,
      })   
      setError({ hasError: false, message: "" })   
      setSelectedValue(undefined);
      setRateInput(0);  
    }  

  };

  const updateBaseCommission = async ({
    seller,
    rate,
  }: {
    seller: string;
    rate: number;
  }) => {
    const data = await commissionBaseService.update({ seller, rate });     

    // renderErrors(data);

    if(data._id){
      setRefetch(!refetch);
    }
    
  };

  const deleteCommission = async (id: any) => {   
    const response = await commissionBaseService._delete(id);    

    // if (response?.error) {      
    //   renderErrors(response?.error);
    // }     

    if(response._id){
      setRefetch(!refetch);
      setRefetchSellers(!refetchSellers);
      showSnackbar(BASE_COMMISSIONS.delete); 
    }

    return response;
  };

  const getAllSellers = async () => {    
    const data = await commissionBaseService.getAllSellers();
    setSellers(data);
  };

  useEffect(() => {
    getAllSellers();
  }, [refetchSellers]);

  useEffect(() => {
    setLoading(true);
    getCommissions();
  }, [page, searchTerm, sortField, refetch]);

  return {
    state: {
      commissions,
      page,
      pageSize,
      seller,
      loading,
      searchTerm,
      sortField,
      error,
      selectedValue,
      rateInput,  
      refetch,
      sellers,
      refetchSellers    
    },
    actions: {
      setPage,
      setSearchTerm,
      createBaseCommission,
      setError,
      updateBaseCommission,
      setSelectedValue,
      setRateInput,
      setRefetch,
      deleteCommission,
      setRefetchSellers      
    },
  };
};
