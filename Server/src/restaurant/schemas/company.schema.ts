import { User } from '../../auth/schema/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';



@Schema({
  timestamps: true,
})



export class Company {
  @Prop()
  enterprise: String;

  @Prop({
    type: [
      {
        latitude: { type: Number },
        longitude: { type: Number },
        latitudeDelta: { type: Number },
        longitudeDelta: { type: Number },
      },
    ],
  })
  location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  }[]

  @Prop()
  email: String;

  @Prop()
  phone: String;

  @Prop()
  tradeRegister: String;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
