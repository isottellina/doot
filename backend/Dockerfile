FROM rust:latest AS build
    MAINTAINER Louise Zanier <louise.zanier@free.fr>

COPY doot /doot
WORKDIR /doot
RUN cargo build --release

FROM debian:bullseye-slim
RUN apt-get update && apt-get install libgcc1 libc6
COPY --from=build /doot/target/release/doot /usr/local/bin/doot

CMD ["/usr/local/bin/doot"]
