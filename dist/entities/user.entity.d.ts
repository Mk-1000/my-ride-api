export declare class User {
    id: number;
    name: string;
    email: string;
    encryptedPassword: string;
    hashPassword(): Promise<void>;
    phoneNumber: string;
    profilePictureUrl: string;
    userType: string;
}
