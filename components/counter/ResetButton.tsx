import React, {Fragment} from "react";
import ActionButton from "../ActionButton";
import {useDialog} from "../../providers/DialogProvider";
import AlertDialog from "../dialog/AlertDialog";
import I18n from "../I18n";

interface Params {
  resetFn: () => void;
  count: number;
}

// let root;
const ResetButton = (params: Params) => {
  const {confirm, dialog} = useDialog();

  const openConfirm = () => {
    confirm('Do you want to reset?', params.resetFn);
  };

  const openAlert = () => {
    dialog(<AlertDialog text={'The count is ' + params.count}></AlertDialog>);
  };

  return <Fragment>
    <ActionButton onClick={openConfirm}>
      <I18n name="reset">Reset</I18n>
    </ActionButton>
    <ActionButton onClick={openAlert}>
      <I18n name="alert">Alert</I18n>
    </ActionButton>
  </Fragment>
}

export default ResetButton
