import { ApiProperty } from '@nestjs/swagger';
import { ImageType } from '../../entities/image.entity';

export class CreateImageDto {
  @ApiProperty({ example: 'CAR', description: 'Type of the image' })
  imageType: ImageType;

  @ApiProperty({ example: 1, description: 'Reference ID for the related entity (car or user)', required: false })
  idReference?: number;

  @ApiProperty({ example: true, description: 'Visibility status of the image', required: false })
  visibility?: boolean;
}