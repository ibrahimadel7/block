export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : IDL.Text });
  const Level = IDL.Variant({
    'Beginner' : IDL.Null,
    'Advanced' : IDL.Null,
    'Intermediate' : IDL.Null,
  });
  const Question = IDL.Record({
    'answers' : IDL.Vec(IDL.Text),
    'text' : IDL.Text,
    'level' : Level,
    'score' : IDL.Nat8,
    'correct_choice' : IDL.Nat8,
  });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const Certificate = IDL.Record({
    'id' : IDL.Nat64,
    'user_principal' : IDL.Principal,
    'score' : IDL.Nat8,
    'awarded_at' : IDL.Nat64,
    'exam_id' : IDL.Nat64,
  });
  const Exam = IDL.Record({
    'id' : IDL.Nat64,
    'title' : IDL.Text,
    'questions' : IDL.Vec(Question),
  });
  const Result_2 = IDL.Variant({ 'Ok' : Exam, 'Err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const Role = IDL.Variant({
    'Teacher' : IDL.Null,
    'Student' : IDL.Null,
    'Admin' : IDL.Null,
  });
  const User = IDL.Record({
    'principal' : IDL.Principal,
    'role' : Role,
    'certificates' : IDL.Vec(IDL.Nat64),
    'exams_taken' : IDL.Vec(IDL.Nat64),
  });
  const Result_4 = IDL.Variant({ 'Ok' : User, 'Err' : IDL.Text });
  const Result_5 = IDL.Variant({ 'Ok' : IDL.Nat8, 'Err' : IDL.Text });
  return IDL.Service({
    'claim_certificate' : IDL.Func([IDL.Nat64], [Result], []),
    'create_exam' : IDL.Func([IDL.Text, IDL.Vec(Question)], [Result], []),
    'create_test_data' : IDL.Func([], [], []),
    'delete_exam' : IDL.Func([IDL.Nat64], [Result_1], []),
    'get_certificates' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(Certificate)],
        ['query'],
      ),
    'get_exam' : IDL.Func([IDL.Nat64], [Result_2], ['query']),
    'get_result' : IDL.Func([IDL.Nat64, IDL.Principal], [Result_3], ['query']),
    'get_user' : IDL.Func([IDL.Principal], [Result_4], ['query']),
    'list_exams' : IDL.Func([], [IDL.Vec(Exam)], ['query']),
    'promote_to_admin' : IDL.Func([IDL.Principal], [Result_1], []),
    'register_user' : IDL.Func([], [], []),
    'submit_answers' : IDL.Func([IDL.Nat64, IDL.Vec(IDL.Text)], [Result_5], []),
  });
};
export const init = ({ IDL }) => { return []; };
