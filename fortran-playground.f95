program prime
    integer:: N;
    integer:: INP;
    integer:: i;
    integer:: ans;
    integer:: j;
    integer:: prm;
    integer:: dummy;
    read(*,*) n;

    ans = 0;

    DO 10 i = 1, N
        prm = 1;
        read(*,*) inp;
        if(inp .EQ. 1) then
            dummy=1;
        else
            DO 20 j = 2, inp - 1
                if(mod(inp,j) .EQ. 0) prm = 0;
            20 continue
            if(prm .EQ. 1) ans = ans + 1;
        endif
    10 continue

    write(*, '(I0)') ans;
end
