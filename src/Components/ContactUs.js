import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = (props) => {
    // Varaibles
    const form = useRef();

    // States
    const [error, setError] = useState(0)

    // On Loads
    useEffect(() => {
        const timer = setTimeout(() => {
            setError(0);
        }, 3000)

        return () => clearTimeout(timer)
    }, [error])

    // Page Functions
    const sendEmail = (e) => {
        e.preventDefault();
        let filledFields = true;
        for (let i=0;i<3;i++){
            if (form.current[i].value.length===0){
                filledFields = false;
                break
            }
        }
        if (filledFields) {
            emailjs.sendForm('service_gmail', 'template_contact', form.current, 'mn_E0iRZ34h1SV6M8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setError(1);
        } else {
            setError(-1);
        }
    };

    // HTML Functions

    // Render
    return (
        <>
        <h1 className={((error===0)?'opacity-0':'opacity-100')+' fixed top-[15%] left-[calc((100%-600px)/2)] w-[600px]  md:left-[calc((100%-320px)/2)] md:w-80 text-center rounded py-4 md:py-2 text-xl bg-stone-800 text-stone-400 dark:bg-stone-400 dark:text-stone-800 transition-all duration-300 ease-in-out'}>
            <i className={((error===1)?'fa-regular fa-circle-check text-emerald-400':'fa-regular fa-circle-xmark text-red-500')+' mx-2'}></i>
            {(error===1)?'Message Sent!':'Incomplete form!'}
        </h1>
        <form ref={form} onSubmit={sendEmail} className='h-full w-full flex flex-col items-center justify-center'>
            <div className='flex flex-col w-[60%] max-w-[600px] md:w-[80%] my-4'>
                <label className='text-2xl md:text-xl my-2 md:hidden'>Name</label>
                <input type="text" name="name" className='text-xl bg-stone-100 dark:bg-stone-300 rounded-sm shadow px-1' placeholder='Name'/>
            </div>
            <div className='flex flex-col w-[60%] max-w-[600px] md:w-[80%] my-4'>
                <label className='text-2xl md:text-xl my-2 md:hidden'>Email</label>
                <input type="email" name="email"  className='text-xl bg-stone-100 dark:bg-stone-300 rounded-sm shadow px-1' placeholder='Email'/>
            </div>
            <div className='flex flex-col w-[60%] max-w-[600px] md:w-[80%] my-4'>
                <label className='text-2xl md:text-xl my-2 md:hidden'>Message</label>
                <textarea name="message"  className='text-lg bg-stone-100 dark:bg-stone-300 rounded-sm shadow px-1 min-h-[120px]' placeholder='Message'/>
            </div>
            <input type="submit" value="Send" className='bg-stone-600 text-stone-300 px-8 md:px-6 py-1 text-2xl md:text-xl my-4 md:my-2 rounded-sm
            hover:bg-stone-400 hover:text-stone-800'/>
        </form>
        </>
    );
};