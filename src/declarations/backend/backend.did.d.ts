import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Certificate {
  'id' : bigint,
  'user_principal' : Principal,
  'score' : number,
  'awarded_at' : bigint,
  'exam_id' : bigint,
}
export interface Exam {
  'id' : bigint,
  'title' : string,
  'questions' : Array<Question>,
}
export type Level = { 'Beginner' : null } |
  { 'Advanced' : null } |
  { 'Intermediate' : null };
export interface Question {
  'answers' : Array<string>,
  'text' : string,
  'level' : Level,
  'score' : number,
  'correct_choice' : number,
}
export type Result = { 'Ok' : bigint } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : null } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : Exam } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : string } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : User } |
  { 'Err' : string };
export type Result_5 = { 'Ok' : number } |
  { 'Err' : string };
export type Role = { 'Teacher' : null } |
  { 'Student' : null } |
  { 'Admin' : null };
export interface User {
  'principal' : Principal,
  'role' : Role,
  'certificates' : BigUint64Array | bigint[],
  'exams_taken' : BigUint64Array | bigint[],
}
export interface _SERVICE {
  'claim_certificate' : ActorMethod<[bigint], Result>,
  'create_exam' : ActorMethod<[string, Array<Question>], Result>,
  'create_test_data' : ActorMethod<[], undefined>,
  'delete_exam' : ActorMethod<[bigint], Result_1>,
  'get_certificates' : ActorMethod<[Principal], Array<Certificate>>,
  'get_exam' : ActorMethod<[bigint], Result_2>,
  'get_result' : ActorMethod<[bigint, Principal], Result_3>,
  'get_user' : ActorMethod<[Principal], Result_4>,
  'list_exams' : ActorMethod<[], Array<Exam>>,
  'promote_to_admin' : ActorMethod<[Principal], Result_1>,
  'register_user' : ActorMethod<[], undefined>,
  'submit_answers' : ActorMethod<[bigint, Array<string>], Result_5>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
