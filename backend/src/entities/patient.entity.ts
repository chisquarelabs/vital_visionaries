import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('patients')
export class Patient {
  @PrimaryColumn()
  patient_id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  dob: string;

  @Column({ nullable: true })
  sex: string;

  @Column({ nullable: true })
  ethnicity: string;

  @Column({ nullable: true })
  qualification: string;

  @Column({ nullable: true })
  occupation: string;

  @Column({ nullable: true })
  disabilities: string;

  @Column({ type: 'boolean', nullable: true })
  smoker: boolean;

  @Column({ type: 'boolean', nullable: true })
  alcoholic: boolean;

  @Column({ type: 'boolean', nullable: true })
  hospitalization: boolean;

  @Column({ type: 'boolean', nullable: true })
  diabetic: boolean;

  @Column({ nullable: true })
  thyroid: string;

  @Column({ type: 'boolean', nullable: true })
  cancer: boolean;

  @Column({ type: 'boolean', nullable: true })
  stroke: boolean;

  @Column({ nullable: true })
  cardiac: string;

  @Column({ nullable: true })
  head_injuries: string;

  @Column({ type: 'boolean', nullable: true })
  seizure: boolean;

  @Column({ nullable: true })
  renals: string;

  @Column({ nullable: true })
  liver: string;

  @Column({ type: 'boolean', nullable: true })
  cloth_assistance: boolean;

  @Column({ type: 'boolean', nullable: true })
  two_meals: boolean;

  @Column({ type: 'boolean', nullable: true })
  neat_bedroom: boolean;

  @Column({ type: 'boolean', nullable: true })
  support_system: boolean;

  @Column({ type: 'boolean', nullable: true })
  social_activities: boolean;

  @Column({ type: 'boolean', nullable: true })
  converse: boolean;

  @Column({ type: 'boolean', nullable: true })
  hobbies: boolean;

  @Column({ type: 'boolean', nullable: true })
  hobby_engagement: boolean;

  @Column({ type: 'boolean', nullable: true })
  public_transport: boolean;

  @Column({ type: 'boolean', nullable: true })
  shopping_alone: boolean;

  @Column({ type: 'boolean', nullable: true })
  sports: boolean;

  @Column({ type: 'boolean', nullable: true })
  suicide_attempt: boolean;

  @Column({ type: 'boolean', nullable: true })
  suicidal_tendencies: boolean;

  @Column({ type: 'boolean', nullable: true })
  wandering: boolean;

  @Column({ type: 'boolean', nullable: true })
  scammed: boolean;

  @Column({ type: 'boolean', nullable: true })
  sleep_pattern: boolean;

  @Column({ type: 'boolean', nullable: true })
  drag_feet: boolean;

  @Column({ type: 'boolean', nullable: true })
  sleep_disturbed: boolean;

  @Column({ type: 'boolean', nullable: true })
  depression: boolean;

  @Column({ type: 'boolean', nullable: true })
  anxious: boolean;

  @Column({ type: 'boolean', nullable: true })
  irritated: boolean;

  @Column({ type: 'boolean', nullable: true })
  memory_problems: boolean;

  @Column({ type: 'boolean', nullable: true })
  short_term_memory: boolean;

  @Column({ type: 'boolean', nullable: true })
  long_term_memory: boolean;

  @Column({ type: 'boolean', nullable: true })
  memory_progression: boolean;

  @Column({ type: 'boolean', nullable: true })
  memory_aids: boolean;

  @Column({ type: 'boolean', nullable: true })
  focusing_difficulty: boolean;

  @Column({ type: 'boolean', nullable: true })
  speech_difficulty: boolean;

  @Column({ type: 'boolean', nullable: true })
  expressing_difficulty: boolean;

  @Column({ type: 'boolean', nullable: true })
  word_finding: boolean;

  @Column({ type: 'boolean', nullable: true })
  repeating: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
