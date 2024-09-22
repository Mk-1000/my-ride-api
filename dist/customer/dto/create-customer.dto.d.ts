export declare class CreateCustomerDto {
    user: {
        name: string;
        email: string;
        password: string;
        phoneNumber?: string;
        profilePictureUrl?: string;
        userType: string;
    };
    address?: string;
    loyaltyPoints?: number;
}
