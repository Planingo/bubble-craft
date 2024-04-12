import { useIntl } from "react-intl"
import { toCapitalized } from "../../utils/formatText"
import { Field } from "../Field/Field"
import { Form as Bubble_CraftForm } from "../Form/Form"
import { Input } from "../Input/Input"
import { Select } from "../Select/Select"

export const ModuleForm = ({onSubmit, pathways}) => {
    const {formatMessage} = useIntl()
    return <Bubble_CraftForm
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
                <Field
                    name="pathway"
                    label={toCapitalized(formatMessage({id: "pathway"}))}
                    rules={[{ required:true, message:"Merci de renseigner la formation" }]}
                >
                    {(props) => (
                            <div className="size">
                                {props.label}
                                <Select
                                className="size"
                                    placeholder="pathway" 
                                    options={pathways?.map(pathway => ({value: pathway.id, label:pathway.name}))} 
                                    {...props.input} 
                                />
                            </div>
                    )}
                </Field>
                </form>
            )}
        />
}