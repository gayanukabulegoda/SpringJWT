package lk.ijse.jwt.service;

import lk.ijse.jwt.dto.UserDTO;

public interface UserService {
    int saveUser(UserDTO userDTO);
    UserDTO searchUser(String username);
}
