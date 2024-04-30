export const COMMERCIAL_DISCOUNTS = {
  reason_max_length: 100,

  title: "Descuentos comerciales",
  subtitle_short: "Da de alta un descuento. Este se reflejará automáticamente en la liquidación",
  subtitle_expired: 'Al confirmar, estos descuentos aparecerán en la sección de "Descuentos vencidos".',
  clearBtn: "Borrar",
  createBtn: "Crear descuento",
  expireBtn: "Dar de baja",
  submitBtn: "Crear",
  reportBtn: "Descargar reporte",
  tableLabels: {
    sku: "SKU",
    discount: "Descuento en $",
    validFrom: "Fecha de inicio",
    validTo: "Fecha de fin",
    seller: "Seller",
    motive: "Motivo del descuento ",
    inactiveReason: "Motivo de baja",
    actions: "Acciones",

  },
  titles: {
    expireDiscount: "Dar de baja el descuento",
    deleteDiscount: "¿Querés eliminar el descuento?"
  },
  deleteBtn: "Sí, eliminar",
  cancelBtn: "No, mantener",
  deleteDiscountBody: "Al eliminar el descuento, no podrás deshacer la acción.",
  labels: {
    sku: "SKU",
    discount: "Descuento en $",
    validFrom: "Fecha de inicio",
    validTo: "Fecha de fin",
    motive: "Motivo del descuento",
    expireMotive: "Motivo de la baja"
  },
  helpText: {
    sku: "SKU del producto",
    discount: "Permite hasta dos decimales. Ejemplo: 720.50",
    validFrom: "Fecha de inicio",
    validTo: "Fecha de fin",
    motive: "Breve texto que no supere los 100 caracteres",
  },
  validations: {
    required: "Campo obligatorio",
    discount: {
      min: "El valor debe ser mayor a 0",
      decimal: "Debe tener hasta 2 decimales",
    },
    motive: {
      maxLength: "El texto debe tener hasta 100 caracteres",
    },
    validFrom: {
      isBeforeToday: "La fecha debe ser igual o posterior a la actual",
    },
    validTo: {
      isBeforeFrom: "La fecha debe ser igual o posterior a la actual",
      maxPeriod: "El período debe ser menor a 6 meses",
    },
  },
  messages: {
    success: "Creaste el descuento con éxito",
    error: "Error al crear el descuento",
    expiredSuccess: "Diste de baja el descuento",
    expiredError: "Error al dar de baja",
    deleteSuccess: "Eliminaste el descuento comercial con éxito",
    deleteError: "Error al eliminar el descuento",
    reportSuccess: "Descargaste el reporte con éxito.",
    reportError: "Error al descargar el reporte."
  },
  description: {
    expiredSuccess: 'Podrás verlo en la sección de “Descuentos vencidos”',
    tryAgainError: "Por favor, volvé a intentar más tarde.",
  }
};

export const formatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  export const SEARCH_FORM = {
    sku_placeholder: "Ingresá SKUs",
    seller_placeholder: "Ingresá nombre o Id de Seller",
  };

  export const CANCEL_MODAL = {
    p1: "¿Está seguro que quiere cancelar la edición del registro?",
    p2: "Se perderán los datos cargados.",
    p3: "¿Está seguro que quiere cancelar la creación del registro?",
    closeBtn: " No",
    cancelBtn: "Sí"
  };

  export const DELETE_MODAL = {
    p1: "¿Está seguro que quiere eliminar la comisión?",
    closeBtn: " No",
    confirmBtn: "Sí"
  };

  export const SUCCESS_MODAL = {
     message: "Los cambios fueron guardados con éxito.",
     successBtn: "Aceptar"
  };

  export const CONFIRM_MODAL = {
    p1: "Ya existe una comisión para el Sku. ¿Desea reemplazarla?",
    p2: "",
    closeBtn: " No",
    confirmBtn: "Sí"
  };

  export const ERROR_MODAL = {
    successBtn: "Aceptar"
  };