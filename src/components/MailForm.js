import React , {useState} from 'react'
import '../styles/MailForm.css'
import emailjs from 'emailjs-com';

const MailForm = () => {
    const userID = "user_XOKaApASr7yWCjPUXQv2O"
    const serviceID = 'service_wg5cj6r'
    const templateId = 'template_f9wkkjd';

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

        
    const handleSubmit = (e) => {
        e.preventDefault();
        sendMessage(templateId, {from_name : name, reply_to: email, message})
    }

    const sendMessage = (templateId, variables) => {
        emailjs.send(
          serviceID, templateId,
          variables, userID
          ).then(res => {
            alert('Email successfully sent!')
            resetForm()
        }, (err) => {
            console.log("Email FAILED " + err)
        })
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit} method="POST">
            <div className="form-group">
                <label>name</label>
                <input type="text" value = {name} onChange={onNameChange} />
            </div>
            <div className="form-group">
                <label>email address</label>
                <input type="email" required value = {email} onChange={onEmailChange} aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label>message</label>
                <textarea rows="5" required value = {message} onChange={onMessageChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">submit</button>
        </form>
    )
}

export default MailForm
