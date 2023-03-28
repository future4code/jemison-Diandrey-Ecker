export class User {
    constructor(private id: string, private name: string, private password: string) {
        this.id = id;
        this.name = name;
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }
}