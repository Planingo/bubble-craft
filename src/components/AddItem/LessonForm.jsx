import { DatePicker } from "../DatePicker/DatePicker"
import { Field } from "../Field/Field"
import { Form as DittoForm } from "../Form/Form"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"

export const LessonForm = ({onSubmit, modules}) => {
    return <DittoForm
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} id="lesson-form">
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
                        name="module_id"
                        label="Module lié"
                        rules={[{ required:true, message:'Merci de renseigner le module' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Select options={modules} {...props.input} />
                                </>
                        )}
                    </Field>
                    <Field
                        name="start_date"
                        label="Date de début"
                        rules={[{ required:true, message:'Merci de renseigner le début' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <DatePicker
                                        showTime
                                        onChange={console.log}
                                        {...props.input}
                                    />
                                </>
                        )}
                    </Field>
                    <Field
                        name="end_date"
                        label="Date de fin"
                        rules={[{ required:true, message:'Merci de renseigner la fin' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <DatePicker
                                        showTime
                                        onChange={console.log}
                                        {...props.input}
                                    />
                                </>
                        )}
                    </Field>
                </form>
            )}
        />
}