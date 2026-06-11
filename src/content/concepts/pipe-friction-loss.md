---
title: "관마찰손실"
summary: "배관 내 유체가 마찰로 잃는 압력. Darcy-Weisbach 식으로 계산하며, 마찰계수는 Reynolds 수와 상대조도에 따라 달라진다."
category: "배관설계"
tags: ["마찰손실", "Darcy-Weisbach", "Reynolds수", "압력손실"]
relatedTools: ["/tools/friction-loss"]
relatedConcepts: ["friction-factor-roughness", "reynolds-number", "darcy-vs-hazen-williams"]
updated: 2026-06-11
---

## 개요

유체가 배관을 흐를 때 관 내벽과의 마찰 때문에 압력이 손실된다.
펌프 양정 계산과 배관 구경 선정의 출발점이 되는 개념이다.

## Darcy-Weisbach 식

$$
\Delta P = f \cdot \frac{L}{D} \cdot \frac{\rho v^2}{2}
$$

| 기호 | 의미 | 단위 |
| --- | --- | --- |
| $\Delta P$ | 압력손실 | Pa |
| $f$ | 마찰계수 (무차원) | – |
| $L$ | 배관 길이 | m |
| $D$ | 관 내경 | m |
| $\rho$ | 유체 밀도 | kg/m³ |
| $v$ | 평균 유속 | m/s |

수두(head) 기준으로 쓰면 $h_f = f \cdot \dfrac{L}{D} \cdot \dfrac{v^2}{2g}$ 가 된다.

## Reynolds 수와 유동 상태

마찰계수 $f$를 구하려면 먼저 유동이 층류인지 난류인지 판별해야 한다.

$$
Re = \frac{\rho v D}{\mu} = \frac{v D}{\nu}
$$

여기서 $\mu$는 점성계수(Pa·s), $\nu$는 동점성계수(m²/s)이다.

| 구간 | 유동 상태 | 마찰계수 |
| --- | --- | --- |
| $Re < 2300$ | 층류 | $f = 64/Re$ |
| $2300 \le Re \le 4000$ | 천이역 | 불안정 — 보통 난류로 가정 |
| $Re > 4000$ | 난류 | Colebrook 식 또는 Moody 선도 |

난류역에서는 Colebrook-White 식을 반복 계산으로 푼다:

$$
\frac{1}{\sqrt{f}} = -2 \log_{10}\left( \frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}} \right)
$$

마찰계수 $f$를 구하는 자세한 방법(조도, Swamee-Jain, 층류 분기)은 [마찰계수 f와 조도](/concepts/friction-factor-roughness), Reynolds 수 판정은 [레이놀즈 수](/concepts/reynolds-number) 노트를 참고한다.

## 한 줄 요약

수두 기준 기본식을 다시 보면

$$
h_f = f \cdot \frac{L}{D} \cdot \frac{v^2}{2g}
$$

**관이 길수록, 좁을수록, 유속이 빠를수록 손실이 커진다.**

$f$가 무차원인 이유: $h_f$(m) $= f \times (L/D,\ \text{무차원}) \times (v^2/2g,\ \text{무차원})$이므로 단위 일관성상 $f$도 무차원이어야 한다.

## 유량(Q) 형태로 변환

$Q = A \cdot v$, $A = (\pi/4) \cdot D^2$ → $v = 4Q/(\pi D^2)$를 대입하면:

$$
h_f = \frac{8 \cdot f \cdot L \cdot Q^2}{\pi^2 \cdot g \cdot D^5}
$$

계수 8의 출처: $v^2$ 대입 시 $(4/\pi)^2$에서 16이 나오고, 원래 식의 $2g$에서 ÷2 → 16/2 = 8.

## 관경 산출식 (같은 식의 역산)

$$
D = \left( \frac{8 \cdot f \cdot L \cdot Q^2}{\pi^2 \cdot g \cdot h_f} \right)^{1/5}
$$

## 양방향 활용 (핵심 통찰)

하나의 식을 미지수만 바꿔 두 방향으로 쓴다.

- **설계**: 목표 유량 + 허용 손실 한계 → 필요한 관경($D$) 결정
- **검토**: 기존 관경 + 유량 → 실제 손실($h_f$) 확인

## 계산 흐름 (실무 절차)

1. 유량 또는 유속 입력 → 관경 산정
2. 동점성계수·관경·유속 → 레이놀즈 수($Re$) 산정
3. $Re$·관 거칠기 → 마찰계수 $f$ 산정
4. 유속·관경·$f$ → 마찰손실 산정
5. 관경별 손실 비교 → 최적 관경 선정

## 실무 메모

- 일반 급수·냉온수 배관은 대부분 난류역이라고 보면 된다.
- 상대조도 $\varepsilon/D$는 배관 재질(강관, 동관, PVC)에 따라 달라진다.
- 빠른 검토에는 [관마찰손실 계산기](/tools/friction-loss)를 쓴다.
