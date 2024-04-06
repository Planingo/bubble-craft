import { Field } from "../Field/Field"
import { Form as Bubble_CraftForm } from "../Form/Form"
import { Input } from "../Input/Input"

export const CompanyForm = ({onSubmit}) => {
    return <Bubble_CraftForm
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} id="company-form">
                    <Field
                        name="name"
                        label="Nom"
                        rules={[{ required:true, message:'Merci de renseigner le nom' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Input placeholder="Pixel Brew" {...props.input} />
                                </>
                        )}
                    </Field>
                </form>
            )}
        />
}