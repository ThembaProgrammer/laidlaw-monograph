export interface Chapter {
    id: string;
    title: string;
    content: string;
    order: number;
    sections: Section[];
}

export interface Section {
    id: string;
    title: string;
    content: string;
    equations?: string[];
    diagrams?: string[];
}
