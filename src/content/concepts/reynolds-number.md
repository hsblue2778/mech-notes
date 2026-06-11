---
title: "레이놀즈 수 (Reynolds Number)"
summary: "관성력 / 점성력의 비. 층류·난류 판정에 쓴다. 온도 → 점성 → Re → f 순으로 유체 물성이 마찰손실에 반영된다."
category: "유체역학 기초"
tags: ["Reynolds수", "층류", "난류", "점성"]
relatedTools: []
relatedConcepts: ["pipe-friction-loss", "friction-factor-roughness"]
updated: 2026-06-11
---

## 정의

$$
Re = \frac{\rho \cdot V \cdot D}{\mu} = \frac{V \cdot D}{\nu}
$$

유체의 **관성력 / 점성력** 비. 층류/난류 판정에 사용한다.

여기서 $\mu$는 점성계수(Pa·s), $\nu$는 동점성계수(m²/s)이다.

## 유동 상태 판정

| 구간 | 유동 상태 | 마찰계수 |
| --- | --- | --- |
| $Re <$ 약 2300 | 층류 | $f = 64/Re$ |
| 2300 ~ 4000 | 천이 영역 | 불안정 |
| $Re >$ 약 4000 | 난류 | Colebrook / Swamee-Jain |

## 인과 관계 정리

점성($\mu$)은 **온도**에 의존하고, $Re$는 그 점성에 의존한다. 즉

$$
\text{온도} \rightarrow \text{점성} \rightarrow Re \rightarrow f
$$

순으로 유체 물성이 마찰손실에 반영된다.
