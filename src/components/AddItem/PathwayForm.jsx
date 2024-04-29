import React from 'react'
import { useIntl } from "react-intl"
import { toCapitalized } from "../../utils/formatText"
import { Field } from "../Field/Field"
import { Form as Bubble_CraftForm } from "../Form/Form"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"

export const PathwayForm = ({onSubmit, calendars}) => {
    const {formatMessage} = useIntl()
    return <Bubble_CraftForm
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} id="pathway-form">
                    <Field
                        name="name"
                        label="Nom"
                        rules={[{ required:true, message:'Merci de renseigner le nom' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Input placeholder="Algorithmique" {...props.input} />
                                </>
                        )}
                    </Field>
                    <Field
                            name="calendar"
                            label={toCapitalized(formatMessage({id: "calendar"}))}
                        >
                            {(props) => (
                                <div className="size">
                                    {props.label}
                                    <Select 
                                        placeholder="calendar"
                                        options={calendars?.map(calendar => ({value: calendar.id, label:calendar.name}))}
                                        {...props.input} 
                                    />
                                </div>
                            )}
                        </Field>
                </form>
            )}
        />
}