// @ts-nocheck
//#region Imports

import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import FieldWrapper from 'components/FieldWrapper';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SEARCH_FIELDS from 'utils/constants/field/search';
import SEARCH_LABELS from 'utils/constants/label/search';
import useGithubRequest from 'utils/hooks/useGithubRequest';
import useRequestState from 'utils/hooks/useRequestState';
import searchSchema from './schema';
import SearchFormButtons from './SearchFormButtons';
import useStyles from './styles';

//#endregion

const SearchForm = () => {
    const styles = useStyles();
    const request = useGithubRequest();

    const methods = useForm({
        reValidateMode: 'onBlur',
        resolver: yupResolver(searchSchema)
    });
    const { handleSubmit, errors } = methods;

    const { run } = useRequestState();
    const onSubmit = useCallback(
        async (data) => {
            const search = data[SEARCH_FIELDS.THIS];
            await run(() => request(search));
        },
        [run, request]
    );

    return (
        <FormProvider {...methods}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                    <FieldWrapper
                        required
                        as={TextField}
                        errors={errors}
                        name={SEARCH_FIELDS.THIS}
                        label={SEARCH_LABELS.THIS}
                    />
                </div>

                <SearchFormButtons />
            </form>
        </FormProvider>
    );
};

export default SearchForm;
