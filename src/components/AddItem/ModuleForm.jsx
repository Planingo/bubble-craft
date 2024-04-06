import { Field } from "../Field/Field"
import { Form as DittoForm } from "../Form/Form"
import { Input } from "../Input/Input"

export const ModuleForm = ({onSubmit}) => {
    return <DittoForm
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} id="module-form">
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
                </form>
            )}
        />
}