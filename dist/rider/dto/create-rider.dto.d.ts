export declare class CreateRiderDto {
    user: {
        name: string;
        email: string;
        password: string;
        phoneNumber?: string;
        profilePictureUrl?: string;
    };
    licenseNumber: string;
    licenseImageUrl?: string;
}
