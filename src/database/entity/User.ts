import { Column, Entity, PrimaryGeneratedColumn, OneToMany, TableInheritance } from 'typeorm';
import { Appointment } from './Appointment';


export default abstract class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string = '';

    @Column()
    public lastName: string = '';

    @Column()
    public mail: string = '';

    @Column()
    public phoneNumber: string = '';

    @Column()
    public hashedPassword: string = '';

    @Column()
    public isActive: boolean = false;

}