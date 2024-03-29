export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: string,
        public city: string,
        public country: string,
        public topic: string,
        public timePreference: string,
        public subscription: boolean
    ) {}
}