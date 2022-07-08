# baemin-choiyeonjeong

## Screenshots
<img width="406" alt="Screen Shot 2022-07-08 at 10 40 00 AM" src="https://user-images.githubusercontent.com/6129764/177899560-2d46272f-b45e-4115-b392-ffea013cd2a3.png">
<img width="405" alt="Screen Shot 2022-07-08 at 10 40 09 AM" src="https://user-images.githubusercontent.com/6129764/177899575-ce1e790b-5f47-425c-ad4b-cdc1e5587939.png">
<img width="404" alt="Screen Shot 2022-07-08 at 10 40 19 AM" src="https://user-images.githubusercontent.com/6129764/177899577-b6bafba6-9091-4cd4-afe3-a34455c6670a.png">
<img width="405" alt="Screen Shot 2022-07-08 at 10 40 39 AM" src="https://user-images.githubusercontent.com/6129764/177899579-aecd0ed0-b34f-4ea3-87de-4ec4d7b41ef6.png">
<img width="404" alt="Screen Shot 2022-07-08 at 10 40 48 AM" src="https://user-images.githubusercontent.com/6129764/177899581-4c04a5d2-594c-4f68-a095-b20a27d1eb8a.png">

## TODO
### 초기화면
- [ ] UI
- [ ] 로그인해주세요 버튼 클릭 -> 로그인페이지로 이동

### 로그인
- [ ] UI
- [ ] 로그인 버튼 클릭 -> 로그인 처리 -> 메인페이지로 이동
  - [ ] 값입력이 없는 상태에서 클릭 -> input 아래 '해당 항목을 입력하세요' 메시지 출력
- [ ] 회원가입 버튼 클릭 -> '회원가입' 페이지로 이동


### 가입-약관동의
- [ ] UI
- [ ] 필수항목을 모두 선택 -> '다음'버튼 활성화
- [ ] 전체동의 버튼 선택 -> 모든 선택항목이 선택됨
  - [ ] 전테동의 버튼을 다시 선택 -> 모든 선택항목이 선택해제
- [ ] 만 14세 이상입니다. 만 14세 미만입니다 -> 라디오버튼
- [ ] '다음' 버튼 클릭시 다음 페이지 노출 


### 휴대번호
- [ ] UI
- [ ] 휴대번호 숫자를 모두 입력 -> `v` 체크표시 색상 변경 (회색 -> 청록색)
- [ ] 휴대번호 숫자가 입력되면 우측에 `x` 아이콘 표시
  - [ ] `x` 아이콘을 클릭하면 입력된 숫자를 모두 삭제
- [ ] 휴대번호 숫자 입력시 양식에 맞게 `-`가 추가된다.
- [ ] '인증번호 받기' 클릭 -> 인증번호 입력 `input`이 나타남
- [ ] '인증번호 받기'는 실제 동작 x -> 2초 뒤 자동으로 입력(`setTimeout API` 사용)
- [ ] '인증번호 다시받기'를 클릭 -> 2초 뒤 랜덤값이 다시 입력
- [ ] 휴대번호, 이증번호가 입력되면 '다음' 버튼이 활성화
- [ ] '다음' 버튼 클릭시 다음 페이지로 이동


### 이메일,추가정보입력
- [ ] UI
- [ ] 이메일 입력시 `x` 우측에 아이콘 표시
  - [ ] `x` 아이콘을 클릭하면 입력된 이메일을 모두 삭제
- [ ] '중복확인' 버튼은 실제 동작 x -> 버튼 클릭시 `v` 체크표시 색상 변경 (회색 -> 청록색)
  - [ ] '중복확인' 버튼 클릭 후 '닉네임', '비밀번호', '생년월일' 입력 UI 노툴
- 비밀번호
  - 10자 이상, 대문자,소문자,숫자, 문자문자중 2종류 조합
  - 같은 숫자 혹은 연속된 숫자를 3개 이상 입력할 수 없음.
  - (예. 111,123,321 불가능)
  - [ ] 비밀번호가 규칙에 맞지 않는 값이 입력되면 하단에 '10자 이상 영어 대문자, 소문자, 숫자, 특수문자 중 2종류를 조합해야 합니다.' 출력 (빨간색)
- [ ] 생년월일 입력시 자동으로 (`.`) 표시
- [ ] 올바르지 않은 생년월일 입력 -> 하단에 오류 메시지 노출 (ex. 1929.03.32)
- [ ] 모든 값(이메일, 닉네임, 비밀번호, 생년월일) 정상적으로 입력되면 우측 상단의 '완료' 표시 활성화 (회색 -> 청록색) 
- [ ] 완료표시 클릭시 메인 페이지로 이동
