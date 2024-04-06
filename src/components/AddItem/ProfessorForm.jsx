import { Field } from "../Field/Field"
import { Form as Bubble_CraftForm } from "../Form/Form"
import { Input } from "../Input/Input"

export const ProfessorForm = ({onSubmit}) => {
    return <Bubble_CraftForm
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} id="professor-form">
                    <Field
                        name="email"
                        label="Email"
                        rules={[{ required:true, message:"Merci de renseigner l'email" }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Input type="email" placeholder="jeanne.dupuis@emil.com" {...props.input} />
                                </>
                        )}
                    </Field>
                    <Field
                        name="lastname"
                        label="Nom"
                        rules={[{ required:true, message:'Merci de renseigner le nom' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Input placeholder="Dupuis" {...props.input} />
                                </>
                        )}
                    </Field>
                    <Field
                        name="firstname"
                        label="Prénom"
                        rules={[{ required:true, message:'Merci de renseigner le prénom' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Input placeholder="Jeanne" {...props.input} />
                                </>
                        )}
                    </Field>
                </form>
            )}
        />
}