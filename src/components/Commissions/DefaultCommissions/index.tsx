import { Input } from "@/components/common/custom-bumeran-lib/Input.styles";
import { InputContainer } from "@/components/common/custom-bumeran-lib/InputContainer";
import { i18n } from "@/constants/commissions/legacy_i18n";
import { PERMISSIONS } from "@/constants/permissions";
import { VALIDATIONS } from "@/constants/validations";
import { CommissionDefaultActions, CommissionDefaultState } from "@/hooks/Commissions/CommissionDefault/types";
import usePermission from "@/hooks/usePermission";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import styled from "styled-components";

const Heading = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: start;
  align-items: start;
`;

interface Props {
  state: CommissionDefaultState;
  actions: CommissionDefaultActions;
}
export default function DefaultCommissionsForm({ state, actions }: Props) {
  const hasPermissionToEdit = usePermission({
    permission: PERMISSIONS.DEFAULT_COMMISSION,
  });

  const submit = async () => {    
    actions.setErrorsOnRate(state.commissionDefault);
    actions.validateOnSubmit(state.commissionDefault);
    await actions.updateCommission({
      commissionDefault: state.commissionDefault,
    });
  };  

  const disabled = state.defaultValue == state.commissionDefault ||
  state.rateError.hasError || state.loading || Number(state.commissionDefault) <= 0;

  return (
    <Container>    
      <div>
        <Grid >
          <GridItem>
            <Heading data-id="commission-default-label">
              {i18n["commissionDefault.label"]}
            </Heading>
          </GridItem>
        </Grid>
      </div>    
      {/* <NumberInput            
            value={state.commissionDefault}
            onChange={(value) => actions.setCommissionDefault(value)}
            label={i18n["commission.percent"]}            
            helpText="Debe ser entre 0,01 y 100"          
            id="commission-default-input"
            errorMessage={state.rateError.message}
            error={state.loading ? false : state.rateError.hasError}
          /> */}
       <div>
      <Grid>
      <GridItem>
        <InputContainer
          errorMessage={state.rateError.message}
          label={i18n["commission.percent"]}          
          id="base-seller-commission-container"
          helpText={VALIDATIONS.outOfRange}
        >
          <Input            
            type="number"
            id="base-seller-commission-input"
            data-id="percentInput"
            min="0"
            max="100"
            step="0.01"
            value={state.commissionDefault}
            onChange={(e) => actions.setCommissionDefault(e.target.value)}
            onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
            hasError={state.loading ? false : state.rateError.hasError}
          />
        </InputContainer>
      </GridItem>
        </Grid>    
        </div> 

      {hasPermissionToEdit && (
        <Button
          id="update"          
          disabled={disabled}
          onClick={submit}
        >{i18n["commissionDefault.create"]}</Button>
      )}
    </Container>
  );
}
