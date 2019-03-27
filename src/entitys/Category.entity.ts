import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import * as dayjs from 'dayjs';

@Entity('categories')
export class CategoryEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pid: number

    @Column()
    name: string

    @Column()
    en_name: string

    @Column()
    status: number

    @Column()
    position: string

    @Column({
        type: "datetime",
        default: dayjs().format('YYYY-MM-DD HH:mm')
    })
    created_up: Date
}