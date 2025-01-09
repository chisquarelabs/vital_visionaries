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

  @Column({ nullable: true })
  smoker: string;

  @Column({ nullable: true })
  alcoholic: string;

  @Column({ nullable: true })
  hospitalization: string;

  @Column({ nullable: true })
  diabetic: string;

  @Column({ nullable: true })
  thyroid: string;

  @Column({ nullable: true })
  cancer: string;

  @Column({ nullable: true })
  stroke: string;

  @Column({ nullable: true })
  cardiac: string;

  @Column({ nullable: true })
  head_injuries: string;

  @Column({ nullable: true })
  seizure: string;

  @Column({ nullable: true })
  renals: string;

  @Column({ nullable: true })
  liver: string;

  @Column({ nullable: true })
  cloth_assistance: string;

  @Column({ nullable: true })
  two_meals: string;

  @Column({ nullable: true })
  neat_bedroom: string;

  @Column({ nullable: true })
  support_system: string;

  @Column({ nullable: true })
  social_activities: string;

  @Column({ nullable: true })
  converse: string;

  @Column({ nullable: true })
  hobbies: string;

  @Column({ nullable: true })
  hobby_engagement: string;

  @Column({ nullable: true })
  public_transport: string;

  @Column({ nullable: true })
  shopping_alone: string;

  @Column({ nullable: true })
  sports: string;

  @Column({ nullable: true })
  suicide_attempt: string;

  @Column({ nullable: true })
  suicidal_tendencies: string;

  @Column({ nullable: true })
  wandering: string;

  @Column({ nullable: true })
  scammed: string;

  @Column({ nullable: true })
  sleep_pattern: string;

  @Column({ nullable: true })
  drag_feet: string;

  @Column({ nullable: true })
  sleep_disturbed: string;

  @Column({ nullable: true })
  depression: string;

  @Column({ nullable: true })
  anxious: string;

  @Column({ nullable: true })
  irritated: string;

  @Column({ nullable: true })
  memory_problems: string;

  @Column({ nullable: true })
  short_term_memory: string;

  @Column({ nullable: true })
  long_term_memory: string;

  @Column({ nullable: true })
  memory_progression: string;

  @Column({ nullable: true })
  memory_aids: string;

  @Column({ nullable: true })
  focusing_difficulty: string;

  @Column({ nullable: true })
  speech_difficulty: string;

  @Column({ nullable: true })
  expressing_difficulty: string;

  @Column({ nullable: true })
  word_finding: string;

  @Column({ nullable: true })
  repeating: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
