import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
  })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'The phone number of the user',
    example: '+1234567890',
    required: false,
  })
  phone?: string;
}

export class UpdateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'Jane Doe',
    required: false,
  })
  name?: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'jane@example.com',
    required: false,
  })
  email?: string;

  @ApiProperty({
    description: 'The phone number of the user',
    example: '+1987654321',
    required: false,
  })
  phone?: string;

  @ApiProperty({
    description: 'Whether the user is active',
    example: true,
    required: false,
  })
  active?: boolean;
}
