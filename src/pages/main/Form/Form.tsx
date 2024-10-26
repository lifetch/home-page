import {SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import style from './style.module.scss'
import figure from '../../../assets/imgs/Rectangle_mob.png'
import LazyImage from "../../../components/LazyImage/LazyImage";

type FormValues = {
    name: string;
    company: string;
    phoneNumber: string;
    email: string;
    telegram: string;
    description: string;
    approval: boolean;
}

type PropsType = {
    privacyPolicyLink: string;
    personalDataLink: string;
}

export default function Form({ privacyPolicyLink, personalDataLink }: PropsType) {

    const { register, handleSubmit, reset, formState:{errors} } = useForm<FormValues>({
        defaultValues: {
            // name: ''
        }
    })

    const submitHandler: SubmitHandler<FormValues> = (data) => {

        const botToken = '7448958506:AAEwpT_5t3jAprzUzxADCHqF6CmZJN4pxmg'
        const chatId = '-4527603288'

        const msg = `Имя: ${data.name},%0AКомпания: ${data.company},%0AТелефон: ${data.phoneNumber},%0AПочта: ${data.email},%0A${data.telegram&&`Телеграмм: ${data.telegram},%0A`}Описание проекта: ${data.description},%0A`
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${msg}`)
            .then(()=>reset())
    }
    const errorHandler: SubmitErrorHandler<FormValues> = (data) => {}

    const isPhoneNumber = (phone:string) => {
        return phone.match(/^((\+7|7|8)+([0-9]){10})$/)?true:false
    }

    const isEmail = (email: string) => {
        return email.match(/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/) ? true : false
    }

    return (
        <div className={style.wrapper}>
            <LazyImage src={figure} width={'auto'} height={1461} className={style.figure}/>

            <div className={style['form-padding']}>

            <div className={style['form-block']}>
                    <div className={style['form-titles']}>
                        <h1 className={style.title}>
                            Форма заявки
                        </h1>
                        <h2 className={style.subtitle}>
                            У вас есть идея, но не знаете как её реализовать?
                        </h2>
                    </div>

                    <div className={style['form-container']}>
                        <form className={style.form} onSubmit={handleSubmit(submitHandler, errorHandler)}>
                            <div className={style['form-input']}>
                                <p className={style['input-title']}>Имя <span>*</span></p>
                                <input type="text" className={errors.name && style.alert}
                                       placeholder={'Иванов Иван Иванович'} {...register('name', {required: true})} />
                            </div>

                            <div className={style['form-input']}>
                                <p className={style['input-title']}>Компания <span>*</span></p>
                                <input type="text" className={errors.company && style.alert}
                                       placeholder={'LifeTech'} {...register('company', {required: true})} />
                            </div>

                            <div className={style['form-input']}>
                                <p className={style['input-title']}>Телефон <span>*</span></p>
                                <input type="text" className={errors.phoneNumber && style.alert}
                                       placeholder={'+7 (777) 777 77 77'} {...register('phoneNumber', {
                                    required: true,
                                    validate: isPhoneNumber
                                })} />
                            </div>

                            <div className={style['form-input']}>
                                <p className={style['input-title']}>Почта <span>*</span></p>
                                <input type="text" className={errors.email && style.alert}
                                       placeholder={'lifetech@gmail.com'} {...register('email', {
                                    required: true,
                                    validate: isEmail
                                })} />
                            </div>

                            <div className={style['form-input']}>
                                <p className={style['input-title']}>Телеграмм (необязательно)</p>
                                <input type="text"
                                       placeholder={'lifetech'} {...register('telegram')} />
                            </div>

                            <div className={style['form-input']}>
                                <p className={style['input-title']}>Описание проекта <span>*</span></p>
                                <textarea rows={5} className={errors.description && style.alert}
                                          {...register('description', {required: true})} />
                            </div>

                            <div className={style['checkbox-input']}>
                                <input
                                    type="checkbox"

                                    className={style.checkbox}
                                    {...register('approval', {
                                        required: {
                                            value: true,
                                            message: 'assa'
                                        }
                                    })}
                                />
                                <p
                                    id={errors.approval && style.alert_checkbox}
                                >
                                    Согласен с{' '}
                                    <a href={privacyPolicyLink} target="_blank">политикой
                                        конфиденциальности</a> сайта и даю{' '}
                                    <a href={personalDataLink} target="_blank">
                                        согласие на обработку персональных данных
                                    </a>,
                                    разрешенных для распространения
                                </p>
                            </div>
                            {
                                errors.approval &&
                                <p className={style.alert_checkbox}>Подтвердите согласие</p>
                            }

                            <button>Отправить заявку</button>
                        </form>
                    </div>
                </div>

            </div>

        </div>
    );
}