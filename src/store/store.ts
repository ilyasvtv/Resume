import { SelectChangeEvent } from "@mui/material"
import { makeAutoObservable } from "mobx"
import { ChangeEvent, FormEvent } from "react"

class Store {
    tags = ["main_info", "work_experience", "last_jobs", "degree", "native_language", "languages", "universities"]

    photo = [
        {
            name: "Photo",
            value: "",
            required: false,
            type: "file",
        },
    ]

    main_info = [
        {
            name: "Surname",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Name",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Patronymic",
            value: "",
            required: false,
            type: "text",
        },
        {
            name: "City",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Birthday",
            value: "",
            required: true,
            type: "date",
        },
        {
            name: "Gender",
            value: "male",
            required: true,
            type: "option",
        },
        {
            name: "Citizenship",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Desired job",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Salary",
            value: "",
            required: true,
            type: "number",
        },
        {
            name: "Salary preference",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "About",
            value: "",
            required: false,
            type: "textarea",
        },
    ]

    work_experience = [
        {
            name: "Had work experience",
            value: "unexperienced",
            required: true,
            type: "radio",
        },
    ]

    job_info = [
        {
            name: "Start of job",
            value: "",
            required: true,
            type: "date",
        },
        {
            name: "End of job",
            value: "",
            required: true,
            type: "date",
        },
        {
            name: "Company",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Post",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Responsibilities",
            value: "",
            required: false,
            type: "text",
        },
    ]

    last_jobs: typeof this.job_info[] = []

    degree = [
        {
            name: "Degree",
            value: "middle",
            required: true,
            type: "option",
        }
    ]

    native_language = [
        {
            name: "Native language",
            value: "",
            required: true,
            type: "text",
        }
    ]

    language_info = [
        {
            name: "Foreign language",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Grade",
            value: "",
            required: true,
            type: "text",
        },
    ]

    languages: typeof this.language_info[] = []

    university_info = [
        {
            name: "Name of university",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Faculty",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Specialization",
            value: "",
            required: true,
            type: "text",
        },
        {
            name: "Date of finish",
            value: "",
            required: true,
            type: "date",
        },
    ]

    universities: typeof this.university_info[] = [];

    current_page = 0;

    constructor() {
        makeAutoObservable(this)
    }

    onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.current_page++;
    }

    returnToLastPage() {
        this.current_page--;
    }

    onChange(e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> | SelectChangeEvent<string>, category: string, index: number = 0) {
        (this as any)[category][index]["value"] = e.target.value;
    }

    onChangeNested(e: ChangeEvent<HTMLInputElement>, category: string, category_index: number, index: number) {
        (this as any)[category][category_index][index]["value"] = e.target.value;
    }

    processFile(e: ChangeEvent<HTMLInputElement>) {
        const { files } = e.target;
        if (files?.length) {
            this.photo[0]["value"] = URL.createObjectURL(files[0]);
        }
    }

    handleExperience() {
        if (this.work_experience[0]["value"] === "experienced" && this.last_jobs.length === 0) this.addJob();
        if (this.work_experience[0]["value"] === "unexperienced") this.last_jobs = [];
    }

    handleCurrentWork(e: ChangeEvent<HTMLInputElement>, job_index: number, index: number) {
        if (e.target.checked) {
            this.last_jobs[job_index][index]["value"] = "current work" ;
        } else {
            this.last_jobs[job_index][index]["value"] = "";
        }
    }

    addJob() {
        const cloned_array = JSON.parse(JSON.stringify(this.job_info));
        this.last_jobs.push(cloned_array);
    }

    addLanguage() {
        const cloned_array = JSON.parse(JSON.stringify(this.language_info));
        this.languages.push(cloned_array);
    }

    addUniversity() {
        const cloned_array = JSON.parse(JSON.stringify(this.university_info));
        this.universities.push(cloned_array);
    }

    deleteCategory(category: string, index: number) {
        (this as any)[category].splice(index, 1);
        if (this.current_page === 1 && store.last_jobs.length === 0) this.work_experience[0]["value"] = "unexperienced"
    }
}

const store = new Store()

export default store;