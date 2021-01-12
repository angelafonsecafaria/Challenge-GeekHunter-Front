export interface CandidatesDetails {
    id: number;
    city: string;
    experience: string;
    technologies: Technologies[]
}

export interface Technologies {
    name: string;
    is_main_tech: boolean
}