import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from '../entities/image.entity';
import { CreateImageDto } from './dto/create-image.dto';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  async createImage(createImageDto: CreateImageDto, filePath: string): Promise<Image> {
    const newImage = this.imageRepository.create({
      ...createImageDto,
      url: filePath, // Store the file path as the image URL
    });
    return this.imageRepository.save(newImage);
  }

  async findAll(): Promise<Image[]> {
    return this.imageRepository.find();
  }

  async findOne(id: number): Promise<Image> {
    return this.imageRepository.findOne({ where: { id } });
  }

  async deleteImage(id: number): Promise<void> {
    await this.imageRepository.delete(id);
  }
}
