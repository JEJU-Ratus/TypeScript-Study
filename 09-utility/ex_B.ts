type AppUser = {
  id: number;
  name: string;
  email?: string;   // 선택 속성
  role: 'admin' | 'member';
};

//실습 B-1: AppUser 타입을 활용하여 PublicProfile 타입 만들기: id, name만 선택하여 생성
/* type PublicProfile = ??? */ 

// 타입 PublicProfile를 활용하여 변수 p에 id값은 10, name 값은 Alice 생성
/* const p: PublicProfile =  ??? */ 

// 실습 B-2: 민감 정보 제거 타입 만들기: email 제외
// AppUser 타입에서 email 속성을 제거하여 SafeAppUser 타입 생성
/* type SafeAppUser  = ??? */ 

// 타입 SafeAppUser활용하여 id 2, name '홍길동', role 'memeber' 값을 safe에 할당
/* safe: SafeAppUser = ??? */

// 실습 B-3: 역할별 사용자 목록 사전 만들기 (Record)
/* AppUser타입에 role 사용자 목록 사전 생성하고, 타입 PublicProfile에서 배열로 지정하여
새타입 AppUsersByRole으로 지정한다. 
*/
/* type AppUsersByRole = ???  */

//AppUsersByRole 타입에 admin 속성에 빈배열, member 속성에 빈배열을 가지는 변수 dict을 생성
/* const dict: AppUsersByRole =  ??? */

type AppStatus = 'idle' | 'loading' | 'success' | 'error';

// 실습 B-4: 상태 유니온에서 완료 상태만 추출
// 타입 AppStatus에서 success, error 속성망 추출하여 타입 OnlySuccessOrError 생성
/* type OnlySuccessOrError = ??? */

// 타입 AppStatus에서 로딩 상태만 제외하여 타입 ExcludeLoading 생성
/* type ExcludeLoading = ??? */