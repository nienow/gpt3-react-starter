import React, {ReactNode} from 'react';
import {useI18n} from "../providers/I18nProvider";

interface Params {
  children: ReactNode;
  name: string;
  values?: any;
}

const I18n = ({name, values, children}: Params) => {
  const {t} = useI18n();
  let value = t ? t[name] : '';
  if (value) {
    if (values) {
      Object.keys(values).forEach(key => {
        value = value.replace('{' + key + '}', values[key]);
      });
    }
    return <>{value}</>;
  } else {
    return <>{children}</>
  }
}

export default I18n
