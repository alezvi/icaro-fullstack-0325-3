import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    email : yup.string().required().email(),
    password : yup.string().required().minLength(6).maxLength(9),
    password_confirmation : yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    agree : yup.boolean().required()
  })

export default function RegisterForm() {
    const { register, handleSubmit, watch, formState : { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const password = watch('password');

    const onSubmit = function (data) {
        console.log(data)
        // enviar los datos a un backend
    }

    return (
        <div className="row">
            <div className="col">
                <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate >

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            { ...register('email', {
                                required : 'El email es requerido',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "El formato del email es inválido"
                                    } 
                                }) 
                            }
                            className="form-control" type="email" 
                        />
                        { errors.email && <p className="text-danger">{ errors.email.message }</p> }
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input 
                            { ...register('password', { 
                                required : 'La contraseña es requerida',
                                minLength : {
                                    value : 6,
                                    message : 'El minimo son 6 caracteres'
                                },
                                maxLength : {
                                    value : 9,
                                    message : 'El maximo son 9 caracteres'
                                }, 
                                }) 
                            } 
                            className="form-control" type="password" 
                        />
                        { errors.password && <p className="text-danger">{ errors.password.message }</p> }
                    </div>

                    <div className="form-group">
                        <label>Repetir contraseña</label>
                        <input 
                            { ...register('password_confirmation', { 
                                required : 'Repita la contraseña',
                                validate : (value) => value == password || 'Las contraseñas deben coincidir',
                            }) } 
                            className="form-control" type="password" 
                        />
                        { errors.password_confirmation && <p className="text-danger">{ errors.password_confirmation.message }</p> }
                    </div>

                    <div className="form-group">
                        <input
                            { ...register('agree', { required : 'Debe aceptar los términos' }) }  
                            className="me-1" type="checkbox" 
                        />
                        <label>Acepta los terminos</label>
                        { errors.agree && <p className="text-danger">{ errors.agree.message }</p> }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
