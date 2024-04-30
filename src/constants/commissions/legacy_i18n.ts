// TODO remove.

export const i18n = {
  loading: "Cargando...",
  "no.options": "Sin opciones disponibles",
  previous: "Anterior",
  next: "Siguiente",
  back: "Volver",
  optional: "Opcional",
  "error.unexpected": "Ocurrió un error inesperado",

  "head.index.title": "Comisiones",
  "head.new.title": "Nueva comisión base",
  "head.edit.title": "Editar comisiones",
  "head.sellerCommission.title": "Editar comisión",
  "head.defaultCommission.title": "Comisiones Default",
  "head.commercialCommission.title": "Comisiones Comerciales",

  search: "Buscar",
  "search.seller.commission.placeholder": "Ingresá nombre de seller",
  "search.current.commission.placeholder": "Ingresá SKUs",
  clean: "Limpiar",

  close: "ACEPTAR",

  "motive.none": "Sin motivo",

  "sellerCommission.new": "Crear comisión",
  "sellerCommission.seller.label": "Seller",
  "sellerCommission.defaultCommission.label": "Comisión base",

  "sellerCommissions.none": "No hay comisiones base.",

  "sellerCommission.create": "Crear comisión",

  "sellerCommission.update.abort": "Cancelar",
  "sellerCommission.update": "Guardar",

  "seller.commission.label": "Seller",
  "seller.commission.defaultCommission.label": "Comisión base",
  "seller.commission.lastUpdate.label": "Última modificación",

  "seller.commission.current.sku.label": "SKU",
  "seller.commission.current.rate.label": "Comisión",
  "seller.commission.current.validFrom.label": "Fecha desde",
  "seller.commission.current.validTo.label": "Fecha hasta",
  "seller.commission.current.seller.label": "Seller",
  "seller.commission.current.lastUpdateDate.label": "Última modificación",

  "sellerCommission.seller.error.required": "Seller es requerido",
  "sellerCommission.defaultCommission.error.minValue":
    "Comisión base mínima -100",
  "sellerCommission.defaultCommission.error.maxValue":
    "Comisión base máxima 100",
  "sellerCommission.defaultCommission.error.required":
    "Comisión base es requerida",

  "commissionExceptions.current": "Comisiones vigentes",
  "commissionExceptions.current.none": "No hay comisiones vigentes",
  "commissionExceptions.comercial.none": "No hay comisiones comerciales",
  "commissionExceptions.search.none": "No se han encontrado resultados",
  "commissionExceptions.expired": "Comisiones vencidas",
  "commissionExceptions.none": "No hay comisiones",
  "commissionException.new": "Nueva comisión especial",

  "commissionException.rate.label": "Comisión",
  "commissionException.motive.label": "Motivo",
  "commissionException.installments.label": "Cuotas",
  "commissionException.validFrom.label": "Desde",
  "commissionException.validTo.label": "Hasta",
  "commissionException.withTime.label": "Con hora",
  "commissionException.minVolume.label": "Volumen minimo",
  "commissionException.skus.label": "SKU",
  "commissionException.skus.all.label": "Todos los SKUs",
  "commissionException.skus.viewAll": "Ver más",

  "commissionException.rate.error.minValue": "Comisión mínima -100",
  "commissionException.rate.error.positive": "Comisión mínima 0",
  "commissionException.rate.error.maxValue": "Comisión máxima 100",
  "commissionException.rate.error.required": "Comisión es requerida",
  "commissionException.motive.error.required": "Motivo es requerido",
  "commissionException.installments.error.minValue": "Cuotas minimas 1",
  "commissionException.installments.error.required":
    "Cantidad de cuotas es requerido",
  "commissionException.skus.error.minValue": "Seleccione al menos un SKU",

  "commissionException.create": "Crear",
  "commissionException.update": "Actualizar",
  "commissionException.cancel": "Cancelar",

  "head.chargeMassive.title": "Carga Masiva",
  "head.chargeMassive.button": "Carga masiva",
  "massiveCharge.download": "Descargar",
  "massiveCharge.downloadTemplate": "Alta / Edición de comisiones comerciales",
  "massiveCharge.downloadDeleteTemplate": "Baja comisiones comerciales",
  "massiveCharge.selectFileToUpload": "Elige el archivo a subir: ",
  "massiveCharge.selectFile": "Seleccionar plantilla",
  "massiveCharge.noFilesSelected": " No seleccionaste ninguna plantilla.",
  "massiveCharge.fileProcessedSuccessful":
    "El archivo se procesó correctamente",
  "massiveCharge.uploadFile": "Subir plantilla",
  "massiveCharge.removeFile.title": "Borrar archivo",
  "massiveCharge.steps.title":
    "Para realizar una carga masiva, seguí estos pasos:",
  "commission.percent": "Porcentaje de comisión",

  "commissionDefault.title": "Comisión por defecto",
  "commissionDefault.label":
    "Ingresá un porcentaje de comisión para aplicar a todos los sellers que no tengan una comisión base configurada.",
  "commissionDefault.update": "Aceptar",
  "commissionDefault.create": "Crear comisión",
  "commissionDefault.cancel": "Cancelar",
  "commissionDefault.success.title": "Creaste la comisión con éxito",
  "commissionDefault.success.label":
    "Se guardó la comisión, se aplicará a todos los sellers que no tengan una comisión base configurada.",
  "commissionDefault.error.title":
    "Ocurrió un error de conexión con la base de datos",
  "commissionDefault.error.label":
    "No se pudo aplicar la comisión, intenta nuevamente más tarde.",
};
