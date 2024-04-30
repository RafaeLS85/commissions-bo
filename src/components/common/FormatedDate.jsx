import { string, oneOfType, instanceOf } from 'prop-types';

export default function FormatedDate({ locale, value, options }) {
  return value && new Intl.DateTimeFormat(locale, options).format(new Date(value));
}

FormatedDate.defaultProps = {
  locale: 'es-AR',
};

FormatedDate.propTypes = {
  locale: string,
  value: oneOfType([string, instanceOf(Date)]).isRequired,
};
