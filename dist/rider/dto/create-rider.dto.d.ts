export declare class CreateRiderDto {
    user: {
        name: string;
        email: string;
        password: string;
        phoneNumber?: string;
        profilePictureUrl?: string;
        userType: string;
    };
    licenseNumber: string;
    licenseImageUrl?: string;
}
