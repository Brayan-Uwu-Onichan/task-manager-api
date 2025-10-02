// src/mascotas/entities/mascota.entity.ts
import { Persona } from '../../personas/entities/persona.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'mascotas' })
export class Mascota {
  @PrimaryGeneratedColumn()
  id_mascota: number;

  // --- ¡LA RELACIÓN CLAVE! ---
  // Muchas mascotas pueden pertenecer a UNA persona.
  @ManyToOne(() => Persona, (persona) => persona.mascotas, { nullable: false })
  persona: Persona;

  @Column({ type: 'varchar', length: 100 })
  nombre_mascota: string;

  @Column({ type: 'varchar', length: 50 })
  tipo_animal: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  raza: string;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento: Date;
  // ... otros campos como color, peso, etc.

  @CreateDateColumn()
  created_at: Date;
}
