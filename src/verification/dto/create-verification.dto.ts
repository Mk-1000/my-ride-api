import { ApiProperty } from '@nestjs/swagger';
import { Image } from '../../entities/image.entity';

export class CreateVerificationDto {
  @ApiProperty({ description: 'Document number being verified' })
  documentNumber: string;

  @ApiProperty({ description: 'Document image URL' })
  documentImageUrl: Image;

  @ApiProperty({ description: 'Selfie with document image URL' })
  selfieWithDocumentUrl: Image;
}
