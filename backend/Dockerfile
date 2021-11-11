FROM rust:latest AS build
    MAINTAINER Louise Zanier <louise.zanier@free.fr>

COPY doot /doot
WORKDIR /doot
RUN cargo build --release

FROM alpine:latest
RUN apk add libgcc gcompat
COPY --from=build /doot/target/release/doot /usr/local/bin/doot

CMD ["/usr/local/bin/doot"]
