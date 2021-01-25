// @ts-nocheck
//#region Imports

import SEARCH_FIELDS from 'utils/constants/field/search';
import SEARCH_LABELS from 'utils/constants/label/search';
import yup from 'utils/validations/yup/yup';

//#endregion

const searchSchema = yup.object().shape({
    [SEARCH_FIELDS.THIS]: yup.string().required().label(SEARCH_LABELS.THIS)
});

export default searchSchema;
