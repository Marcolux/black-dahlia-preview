import { useState, useRef, useEffect } from "react"
import Dropdown from "../../components/DropdownSelect/DropdownSelect"
import "../page.scss"
import "./contact-page.scss"
import emailjs from "@emailjs/browser"

emailjs.init("H3N6QwFNl137XPhBb")

const ContactPage = () => {
    const nameRef = useRef<HTMLInputElement | null>(null)
    const formRef = useRef<HTMLFormElement | null>(null)

    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [budget, setBudget] = useState("")
    const [email, setEmail] = useState("")
    const [businessName, setBusinessName] = useState("");
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [sent, setSent] = useState(false)

    const maxMessageLength = 600

    // Auto-focus first name on mount
    useEffect(() => { nameRef.current?.focus() }, [])

    // Auto-hide success message after a few seconds
    useEffect(() => {
        if (!sent) return
        const t = setTimeout(() => setSent(false), 3000)
        return () => clearTimeout(t)
    }, [sent])

    const isEmailValid = email === "" ? true : /\S+@\S+\.\S+/.test(email)

    const isFormValid =
        name.trim() &&
        subject.trim() &&
        budget.trim() && 
        message.trim() &&
        isEmailValid

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isFormValid || isSubmitting) {
            // Scroll to form if invalid to help the user
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
            return
        }

        try {
            setIsSubmitting(true)

            const templateParams = {
                form_name: name,
                business_name: businessName || "N/A",
                email_address: email,
                project_type: subject,
                project_budget: budget,
                message: message
            }
            
            await emailjs.send(
                "service_4a753w5",
                "template_7wusit9",
                templateParams
            )

            setSent(true)

            // Reset fields
            setName("")
            setSubject("")
            setBudget("")
            setBusinessName("")
            setEmail("")
            setMessage("")
            nameRef.current?.focus()
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="page" id="ContactPage">
        <h1 className="page_sub-headers-vr">Let’s Create Something Beautiful </h1>

        <p className="page_paragraphText col-9 text-center fontSize20">
            Ready to bring your vision to life? Whether you’re here to start your
            rebrand, design a new website, or create something beautifully custom,
            I’d love to hear from you. Tell me a little about your project, and
            let’s begin crafting something unforgettable together.
        </p>

            <form
                id="contactForm"
                ref={formRef}
                method="post"
                className="col-12 flex flex-column flex-justifyContent-center mt-35"
                onSubmit={handleSubmit}
                noValidate
            >
                <div className="flex flex-alignItems-center oneRow">
                    {/* Name */}
                    <div className="field flex flex-column col-12">
                        <label htmlFor="form_name" className="mb-5">
                            NAME:
                        </label>
                        <input
                            placeholder="Your Full Name"
                            ref={nameRef}
                            className="inputText"
                            type="text"
                            id="form_name"
                            name="form_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div className="field flex flex-column col-12">
                        <label htmlFor="email_address" className="mb-5">
                            EMAIL:
                        </label>
                        <input
                            placeholder="you@youremail.com"
                            className={`inputText ${ email && !isEmailValid ? "inputError" : "" }`}
                            type="email"
                            id="email_address"
                            name="email_address"
                            onChange={(e) => setEmail(e.target.value)}
                            title="Please enter a valid email address"
                            value={email}
                            required
                        />
                        {email && !isEmailValid && (
                            <small className="errorText fontSize14 mt-5">
                            Please enter a valid email.
                            </small>
                        )}
                    </div>
                </div>

                {/* BUSINESS NAME (OPTIONAL) */}
                <div className="field flex flex-column col-12">
                    <label htmlFor="business_name" className="mb-5">BUSINESS NAME (OPTIONAL):</label>
                    <input
                        placeholder="Your Business Name"
                        className={`inputText`}
                        type="text"
                        id="business_name"
                        name="business_name"
                        title="Your business name"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                    />
                </div>
                <div className="flex flex-alignItems-center oneRow">
                    {/* Email Subject */}
                    <div className="field flex flex-column col-12">
                        <label htmlFor="project_type" className="mb-5">PROJECT TYPE:</label>
                        <select
                            className="inputText"
                            id="project_type"
                            name="project_type"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        >
                            <option value="" disabled hidden> Select a Project </option>
                            <option value="Logo" >Logo</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Web Development"> Web Development </option>
                            <option value="Planner"> Planner </option>
                            <option value="Event Branding"> Event Branding </option>
                            <option value="Book Creation"> Book Creation </option>
                            <option value="Menu Design"> Menu Design </option>
                            <option value="Other"> Other </option>
                        </select>
                    </div>
                    {/* BUDGET RANGE */}

                    
                    <Dropdown
                        className="inputText"
                        id="project_budget"
                        label="Project type"
                        name="project_budget"
                        onChange={(value) => setSubject(value)}
                        options={[
                            { value: "$1,000-$2000", label: "$1,000-$2000" },
                            { value: "$3,000-$4000", label: "$3,000-$4000" },
                            { value: "$5,000 + above", label: "$5,000 + above" },
                            { value: "Prefer to not answer at this time", label: "Prefer to not answer at this time" }
                        ]}
                        value={subject}
                    />
                    <div className="field flex flex-column col-12">
                        <label htmlFor="project_budget" className="mb-5">BUDGET RANGE:</label>
                        <select
                            
                            id="project_budget"
                            name="project_budget"
                            required
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                        >
                            <option value="" disabled hidden> Select a Budget </option>
                            <option value="$1,000-$2000" >$1,000-$2000</option>
                            <option value="$3,000-$4000">$3,000-$4000</option>
                            <option value="$5,000 + above"> $5,000 + above </option>
                            <option value="Prefer to not answer at this time"> Prefer to not answer at this time </option>
                        </select>
                    </div>
                </div>


                {/* Message */}
                <div className="field flex flex-column">
                    <label htmlFor="message" className="mb-5">
                        TELL US ABOUT YOUR VISION OR ASK ANY INQUIRIES HERE:
                    </label>
                    <textarea
                        rows={5}
                        className="inputText p-5"
                        id="message"
                        name="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value.slice(0, maxMessageLength)) }
                    />
                    <div className="flex flex-justifyContent-spaceBetween mt-5">
                        <small> {message.length}/{maxMessageLength} characters </small>
                    </div>
                </div>

                {/* Submit + Status */}
                <div className="field flex flex-column flex-justifyContent-center flex-alignItems-center">
                    <button
                        type="submit"
                        className="primaryBtn-vr1 py-10"
                        disabled={!isFormValid || isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    </button>

                    <p
                        id="messageSent"
                        className={`fontSize16 my-0 messageSent ${ sent ? "show" : "hide" }`}
                        role="status"
                        aria-live="polite"
                    >
                        Message Sent! Thank You!
                    </p>
                </div>
                <div className="col-12 flex flex-justifyContent-center">
                    <p>Please allow 1-2 business days for a response</p>
                </div>

            </form>
        </div>
    )
}

export default ContactPage
