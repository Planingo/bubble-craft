import React from 'react';
import { Field } from "../Field/Field";
import { Form as Bubble_CraftForm } from "../Form/Form";
import { Input } from "../Input/Input";

export const RoomForm = ({onSubmit}) => {
    return <Bubble_CraftForm
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, values}) => (
                <form onSubmit={handleSubmit} id="room-form">
                <Field
                    name="name"
                    label="Nom"
                    rules={[{ required:true, message:'Merci de renseigner le nom' }]}
                >
                    {(props) => (
                            <>
                                {props.label}
                                <Input placeholder="Alan Turing" {...props.input} />
                            </>
                    )}
                </Field>
                    <Field
                        name="max_seats"
                        label="Nombre max de places assises"
                        rules={[{ required:true, message:'Merci de renseigner le nom' }]}
                    >
                        {(props) => (
                                <>
                                    {props.label}
                                    <Input placeholder="12" type="number" {...props.input} />
                                </>
                        )}
                    </Field>
                </form>
            )}
        />
}