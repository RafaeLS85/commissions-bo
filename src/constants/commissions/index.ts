export const BASE_COMMISSIONS = {
    update: "Guardaste los cambios con éxito",
    create: "Creaste la comisión con éxito",
    delete: "Eliminaste la comisión con éxito",
    
    deleteModal: {
        header: "¿Querés eliminar la comisión?",
        message: "Al eliminar la comisión, no podrás deshacer la acción."
    }
}

export const BASE_COMMISSIONS_TABLE = {
    headers: {
        th_seller: "Seller",
        th_commission: "Comisión",
        th_lastUpdateDate: "Última modificación",
        th_actions: "Acciones"
    }
}


export const COMMISSIONS_TABLE = {   
    headers: {
        th_sku: "SKU",
        th_commission: "Comisión",
        th_validFrom: "Fecha de inicio",
        th_validTo: "Fecha de fin",
        th_seller: "Seller",
        th_lastUpdateDate: "Última modificación",
        th_actions: "Acciones"
    }
}

export const NEW_COMMISSION_FORM = {
    labels: {
        rate: "Porcentaje de comisión",
        validFrom: "Fecha de inicio",
        validTo: "Fecha de fin",
        sku: "SKU"
    },
    helpTexts: {
        rate: "Permite hasta dos decimales. Ejemplo: 25.50"
    },
    title: "Crear comisión"
}